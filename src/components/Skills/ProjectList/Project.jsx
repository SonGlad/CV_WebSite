import { ProjectStyled } from "./Project.styled";
import {ReactComponent as IndividualIcon} from "../../../images/svg-icons/user.svg";
import {ReactComponent as TeamIcon} from "../../../images/svg-icons/users.svg";
import {ReactComponent as TotalIcon} from "../../../images/svg-icons/total.svg";
import {ReactComponent as OtherIcon} from "../../../images/svg-icons/other.svg";
import {ReactComponent as OpenIcon} from "../../../images/svg-icons/openfolder.svg";
import {ReactComponent as EducationalIcon} from "../../../images/svg-icons/education.svg";
import githubData  from "../../../utils/github.json";
import { useCallback, useEffect, useState } from "react";
import { useData } from "../../../hooks/useData";
import { useInView } from 'react-intersection-observer';



export const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { data: {repositoryOwner: {repositories: { totalCount } }}} = githubData;
    const { refactoredData } = useData();
    const [totalPercent, setTotalPercent] = useState();
    const [individualPercent, setIndividualPercent] = useState();
    const [educationalPercent, setEducationalPercent] = useState();
    const [teamPercent, setTeamPercent] = useState();
    const [otherPercent, setOtherPercent] = useState();
    const [openPercent, setOpenPercent] = useState();
    const [backendPercent, setBackendPercent] = useState();
    


    const countByType = refactoredData.reduce((acc, current) => {
        const { type } = current;
        if (!acc[type]) {
          acc[type] = 0;
        }
        acc[type]++;
        return acc;
    }, {});
    const { individual = 0, educational = 0, team = 0, other = 0, commercial = 0, backend = 0 } = countByType;


    const calculateTotalPercent = useCallback(() => {
        const totalPercent = Math.round((totalCount / totalCount) * 100);
        setTotalPercent(totalPercent);
    }, [totalCount]);


    const calculateIndividualPercent = useCallback(() => {
        const individualPercent = Math.round((individual / totalCount) * 100);
        setIndividualPercent(individualPercent);
    }, [individual, totalCount]);


    const calculateEducationalPercent = useCallback(() => {
        const educationalPercent = Math.round((educational / totalCount) * 100);
        setEducationalPercent(educationalPercent);
    }, [educational, totalCount]);


    const calculateTeamPercent = useCallback(() => {
        const teamPercent = Math.round((team / totalCount) * 100);
        setTeamPercent(teamPercent);
    }, [team, totalCount]);


    const calculateOtherPercent = useCallback(() => {
        const otherPercent = Math.round((other / totalCount) * 100);
        setOtherPercent(otherPercent);
    }, [other, totalCount]);


    const calculateOpenPercent = useCallback(() => {
        const openPercent = Math.round((commercial / totalCount) * 100);
        setOpenPercent(openPercent);
    }, [commercial, totalCount]);


    const calculateBackendPercent = useCallback(() => {
        const backendPercent = Math.round((backend / totalCount) * 100);
        setBackendPercent(backendPercent);
    }, [backend, totalCount]);


    useEffect(() => {
        calculateTotalPercent ();
        calculateIndividualPercent();
        calculateEducationalPercent();
        calculateTeamPercent();
        calculateOtherPercent();
        calculateOpenPercent();
        calculateBackendPercent();
    }, [
        calculateEducationalPercent, 
        calculateIndividualPercent, 
        calculateTeamPercent, 
        calculateTotalPercent,
        calculateOtherPercent,
        calculateOpenPercent,
        calculateBackendPercent,
    ]);

    
    const validTotalPercent = isNaN(totalPercent) ? 0 : totalPercent;
    const validIndividualPercent = isNaN(individualPercent) ? 0 : individualPercent;
    const validEducationalPercent = isNaN(educationalPercent) ? 0 : educationalPercent;
    const validTeamPercent = isNaN(teamPercent) ? 0 : teamPercent;
    const validOtherPercent = isNaN(otherPercent) ? 0 : otherPercent;
    const validOpenPercent = isNaN(openPercent) ? 0 : openPercent;
    const validBackendPercent = isNaN(backendPercent) ? 0 : backendPercent;


    return(
        <ProjectStyled>
            <ul ref={ref} className={`list ${inView ? 'visible' : 'hidden'}`}>
                <li className="item">
                    <div className="descr-cont">
                        <TotalIcon className="item-svg" width={20} height={20}/>
                        <p className="text">Total Repositories</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-total"
                            width={validTotalPercent}
                            style={{ width: `${validTotalPercent}%`}}
                        >
                            <span></span>
                            <p>{totalCount}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <EducationalIcon className="item-svg" width={20} height={20}/>
                        <p className="text">Educational Projects</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-educational"
                            width={validEducationalPercent}
                            style={{ width: `${validEducationalPercent}%`}}
                        >
                            <span></span>
                            <p>{educational}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <IndividualIcon className="item-svg" width={20} height={20}/>
                        <p className="text">Individual Projects</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-individual"
                            width={validIndividualPercent}
                            style={{ width: `${validIndividualPercent}%`}}
                        >
                            <span></span>
                            <p>{individual}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <TeamIcon className="item-svg" width={20} height={20}/>
                        <p className="text">Team Projects</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-team"
                            width={validTeamPercent}
                            style={{ width: `${validTeamPercent}%`}}
                        >
                            <span></span>
                            <p>{team}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <OtherIcon className="item-svg" width={20} height={20}/>
                        <p className="text">Other Projects</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-other"
                            width={validOtherPercent}
                            style={{ width: `${validOtherPercent}%`}}
                        >
                            <span></span>
                            <p>{other}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <OpenIcon className="item-svg" width={20} height={20}/>
                        <p className="text">Commercial Projects</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-open"
                            width={validOpenPercent}
                            style={{ width: `${validOpenPercent}%`}} 
                        >
                            <span></span>
                            <p>{commercial}</p>
                        </div>
                    </div>
                </li>
                <li className="item">
                    <div className="descr-cont">
                        <OpenIcon className="item-svg" width={20} height={20}/>
                        <p className="text">Backend Projects</p>
                    </div>
                    <div className="colored-area">
                        <div className="area-for-open"
                            width={validBackendPercent}
                            style={{ width: `${validBackendPercent}%`}} 
                        >
                            <span></span>
                            <p>{backend}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </ProjectStyled>
    )
};