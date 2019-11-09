export interface ISearchFormProps {

    handleSearchInputChange?(event: ChangeEvent<HTMLInputElement>): void;
    handleSearchSubmit?(event: ChangeEvent<HTMLInputElement>): void;
    searchValue?: string;
}