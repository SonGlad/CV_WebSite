import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";
import { SkillsComponent } from "../../components/Skills/Skills";
import githubData  from "../../utils/github.json";
import { 
    stateRefactoredData, 
    stateRefactoredProjects, 
} from "../../redux/Data/data-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useData } from "../../hooks/useData";



const Skills = () => {
    const dispatch = useDispatch();
    const {isRefactoring, isRefactoredData} = useData();


    const { data: { repositoryOwner: { repositories: { nodes } } } } = githubData;
    const repositoriesData = nodes.map(({ 
        id, 
        name,
        type,
        url, 
        languages:{ edges }
    }) => ({ 
        id, 
        name,
        type,
        url,
        languages: edges.map(({ size, node: { name} }) => ({ name, size }))
    }));


    const filteredRepositories = repositoriesData.filter(repo => repo.type === "individual" || repo.type === "team" || repo.type === "commercial" || repo.type === "backend");
    
    
    useEffect(() => {
        if(!isRefactoring){
            dispatch(stateRefactoredData(repositoriesData));
        }
        if(!isRefactoredData){
            dispatch(stateRefactoredProjects(filteredRepositories));
        }
    }, [dispatch, filteredRepositories, isRefactoredData, isRefactoring, repositoriesData]);

    

    return(
        <Section>
            <Container>
                <SkillsComponent/>   
            </Container>
        </Section>
    )
};


export default Skills;