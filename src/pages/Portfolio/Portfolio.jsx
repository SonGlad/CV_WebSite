import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";
import { PortfolioSection } from "../../components/Portfolio/Portfolio";
import gitHubData from "../../utils/github.json";
import projectsData from "../../utils/projects.json";
import { 
    statePortfolioRefactoredData, 
    statePortfolioDataProjects, 
} from "../../redux/Data/data-slice";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useData } from "../../hooks/useData";


const Portfolio = () => {
    const dispatch = useDispatch();
    const {isPortfolioRefactoredData, isPortfolioData } = useData();


    const { data: { repositoryOwner: { repositories: { nodes } } } } = gitHubData;
    const repositoriesData = nodes.map(({
        id,
        type,
        url,
        homepageUrl,
        createdAt,
        collaborators:{ nodes },
        languages:{ edges }
    }) => ({
        id,
        type,
        url,
        homepageUrl,
        createdAt,
        collaborators: nodes.map(({ name, url }) => ({ name, url })),
        languages: edges.map(({ size, node: { name} }) => ({ name, size }))
    }));
    const filteredRepositories = repositoriesData.filter(repo => repo.type === "individual" || repo.type === "team" || repo.type === "commercial");


    const mergedData = useMemo(() => {
        const mergedDataArray = [];
        filteredRepositories.forEach(gitHubItem => {
            const correspondingItem = projectsData.find(projectItem => projectItem.id === gitHubItem.id);
        
            if (correspondingItem) {
                const mergedItem = {
                    id: gitHubItem.id,
                    type: gitHubItem.type,
                    url: gitHubItem.url,
                    homepageUrl: gitHubItem.homepageUrl,
                    createdAt: gitHubItem.createdAt,
                    collaborators: gitHubItem.collaborators,
                    languages: gitHubItem.languages,
                    name: correspondingItem.name,
                    role: correspondingItem.role,
                    coverImage: correspondingItem.coverImage,
                    figma_url: correspondingItem.figma_url,
                    img_url: correspondingItem.img_url,
                    description: correspondingItem.description,
                    technical_task: correspondingItem.technical_task,
                    technologies: correspondingItem.technologies,
                    libraries: correspondingItem.libraries,
                };
                mergedDataArray.push(mergedItem);
            }
        });
        return mergedDataArray;
    }, [filteredRepositories]);
 
    
    useEffect(() => {
        if(!isPortfolioData){
            dispatch(statePortfolioDataProjects(mergedData));
        }
        if(!isPortfolioRefactoredData){
            dispatch(statePortfolioRefactoredData(filteredRepositories));
        }
    }, [dispatch, filteredRepositories, isPortfolioData, isPortfolioRefactoredData, mergedData]);



    return(
        <Section>
            <Container>
              <PortfolioSection/>
            </Container>
        </Section>
    )
};


export default Portfolio;