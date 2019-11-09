import { ISearchFormProps } from "../SearchForm/ISearchFormProps";

export interface ISideBarProps {

    isSearchPage: boolean;
    isSavedPage: boolean;
    navHref: string;
    searchFormProps?: ISearchFormProps;
}