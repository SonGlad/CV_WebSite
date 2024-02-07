import { SkillsStyled } from "./Skills.styled";
import { Icons } from "./ReactIcons/Icons";
import { Projects } from "./ProjectList/Project";
import { CodingCharts } from "./CodingCharts/CodingCharts";
import githubData  from "../../utils/github.json";
import { 
    stateRefactoredData, 
    stateRefactoredProjects, 
} from "../../redux/Data/data-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useData } from "../../hooks/useData";



export const SkillsComponent = () => {
    const dispatch = useDispatch();
    const {isRefactoring, isRefactoredData} = useData();


    const { data: { repositoryOwner: { repositories: { nodes } } } } = githubData;
    const repositoriesData = nodes.map(({ 
        id, 
        name,
        type,
        url, 
        stargazerCount, 
        collaborators:{ totalCount: collaborators},
        mentionableUsers:{totalCount: mentionableUsers},
        languages:{ edges }
    }) => ({ 
        id, 
        name,
        type,
        url,
        stargazerCount,
        collaborators,
        mentionableUsers,
        languages: edges.map(({ size, node: { name} }) => ({ name, size }))
    }));


    const filteredRepositories = repositoriesData.filter(repo => repo.type === "individual" || repo.type === "team");
    
    
    useEffect(() => {
        if(!isRefactoring){
            dispatch(stateRefactoredData(repositoriesData));
        }
        if(!isRefactoredData){
            dispatch(stateRefactoredProjects(filteredRepositories));
        }
    }, [dispatch, filteredRepositories, isRefactoredData, isRefactoring, repositoriesData]);
    


    return (
        <SkillsStyled>
            <h1 className="main-education-title">Professional <span>Skillset</span></h1>
            <Icons/>
            <h2 className="statistics-title">Official <span>GitHub</span> statistics</h2>
            <h3 className="title"><span>GitHub</span> Repositories</h3>
            <Projects/>
            <h3 className="title">Programming <span>Language</span> Diagrams</h3>
            <h4 className="title-descr">Based <span>on</span> Individual <span>&</span> Team projects only</h4>
            <CodingCharts/>
        </SkillsStyled>
    )
};