import React from 'react';
import DnDCharacter from './DnDCharacter';
import './dndstyles.css';
interface IDnDPetStatsSheetProps {
    character?: DnDCharacter;
    defaultCharacter?: DnDCharacter;
    onCharacterChanged?: (character: DnDCharacter, changedField: string, newValue: any) => void;
}
interface IDnDPetStatsSheetState {
    character: DnDCharacter;
}
declare class DnDPetStatsSheet extends React.Component<IDnDPetStatsSheetProps, IDnDPetStatsSheetState> {
    constructor(props: IDnDPetStatsSheetProps);
    updateCharacter(name: string, value: any): void;
    getCharacter(): DnDCharacter;
    render(): JSX.Element;
}
export default DnDPetStatsSheet;


