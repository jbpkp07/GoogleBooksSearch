// import { AxiosResponse } from "axios";
import React from "react";

import { htmlRoutes } from "../../../routes/htmlRoutes";
import { SideBar } from "../components/SideBar/SideBar";
// import { Tile } from "../components/Tile/Tile";
import { TilesWrapper } from "../components/TilesWrapper/TilesWrapper";
import { Wrapper } from "../components/Wrapper/Wrapper";

// import { IBook } from "../../../interfaces/IBook";
// import { Api } from "../Api";
// import { ITile } from "../data/ITile";
// import { tiles } from "../data/tiles";



// interface IState {

    
// }


export class SearchPage extends React.Component {

    // public readonly state: IState = {

       
    // };



    // public readonly clickTile = (id: number): void => {

    //     Api.searchGoogleBooks("Disc Golf Strong")

    //         .then((response: AxiosResponse) => {

    //             // console.log(response);

    //             const books: IBook[] = response.data;

    //             console.log(books);

    //             Api.getAllSavedBooks()

    //                 .then((result: AxiosResponse) => {

    //                     const savedBooks: IBook[] = result.data;

    //                     console.log(savedBooks);

    //                 }).catch((err: string) => {

    //                     console.log(err);
    //                 });

    //         }).catch((err: string) => {

    //             console.log(err);
    //         });



    //     new Promise((resolve: Function): void => {

    //         if (this.state.hasWon) {

    //             const newState: IState = {

    //                 score: 0,
    //                 topScore: this.state.topScore,
    //                 tiles,
    //                 clicked: [],
    //                 hasWon: false,
    //                 hasLost: false
    //             };

    //             this.setState(newState, resolve());  // reset game after win before continuing
    //         }
    //         else {

    //             resolve();  // not a win, just continue
    //         }
    //     })
    //         .then(() => {

    //             if (!this.state.clicked.includes(id)) {

    //                 let topScore: number = this.state.topScore;

    //                 if (this.state.score === topScore) {

    //                     topScore++;
    //                 }

    //                 this.state.clicked.push(id);

    //                 const newState: IState = {

    //                     score: this.state.score + 1,
    //                     topScore,
    //                     tiles: this.shuffleTiles(tiles),
    //                     clicked: this.state.clicked,
    //                     hasWon: this.state.clicked.length === tiles.length,
    //                     hasLost: false
    //                 };

    //                 this.setState(newState);
    //             }
    //             else {

    //                 const newState: IState = {

    //                     score: 0,
    //                     topScore: this.state.topScore,
    //                     tiles: this.shuffleTiles(tiles),
    //                     clicked: [],
    //                     hasWon: false,
    //                     hasLost: true
    //                 };

    //                 this.setState(newState);
    //             }
    //         });
    // }

    // private readonly renderTile = (tile: ITile, gameOver: boolean): JSX.Element => {

    //     return (

    //         <Tile
    //             id={tile.id}
    //             alt={tile.alt}
    //             src={tile.src}
    //             gameOver={gameOver}
    //             clickTile={this.clickTile}
    //             key={tile.id}
    //         />
    //     );
    // }

    // private shuffleTiles(tilesArray: ITile[]): ITile[] {

    //     for (let i: number = tilesArray.length - 1; i > 0; i--) {

    //         const j: number = Math.floor(Math.random() * (i + 1));

    //         [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
    //     }

    //     return tilesArray;
    // }

    public readonly render = (): JSX.Element => {

        const sideBarConfg = {

            isSearchPage: true,
            isSavedPage: false,
            href: htmlRoutes.savedPageRoute
        };

        console.log(htmlRoutes.searchPageRoute);
        return (

            <Wrapper>
                <SideBar {...sideBarConfg} />
                <TilesWrapper>
                    {/* {this.state.tiles.map((tile: ITile) => this.renderTile(tile, gameOver))} */}
                </TilesWrapper>
            </Wrapper>
        );
    }
}