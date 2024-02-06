import { useSelector } from "react-redux";
import { 
    selectRefactoredData,
    selectIsRefactoring,
    selectIndividualAndTeamData,
    selectIndividualRefactoredData,

} from "../redux/Data/data-selectors";


export const useData = () => {
    const refactoredData = useSelector(selectRefactoredData);
    const isRefactoring = useSelector(selectIsRefactoring);
    const individualAndTeamData = useSelector(selectIndividualAndTeamData);
    const isRefactoredData = useSelector(selectIndividualRefactoredData)

    
    return{
        refactoredData,
        isRefactoring,
        individualAndTeamData,
        isRefactoredData,
    }
};