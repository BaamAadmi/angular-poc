import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
    getAll() {
        return this.getPlayers();
    }

    getById(id: number) {
        return this.getPlayers().find(Player => Player.id === id);
    }

    save(Player: any) {
        const Players = this.getPlayers();

        if (Player.id) {
            // update existing Player

            for (let i = 0; i < Players.length; i++) {
                if (Players[i].id === Player.id) {
                    Players[i] = Player;
                    break;
                }
            }
            this.setPlayers(Players);
        } else {
            // create new Player

            // assign id
            const lastPlayer = Players[Players.length - 1] || { id: 0 };
            Player.id = lastPlayer.id + 1;

            // save to local storage
            Players.push(Player);
            this.setPlayers(Players);
        }
    }

    delete(id: number) {
        const Players = this.getPlayers();
        for (let i = 0; i < Players.length; i++) {
            const Player = Players[i];
            if (Player.id === id) {
                Players.splice(i, 1);
                break;
            }
        }
        this.setPlayers(Players);
    }

    // private helper methods

    private getPlayers(): any[] {
        if (!localStorage.getItem('Players')) {
            localStorage.setItem('Players', JSON.stringify([]));
        }

        return JSON.parse(localStorage.getItem('Players'));
    }

    private setPlayers(Players: any[]) {
        localStorage.setItem('Players', JSON.stringify(Players));
    }
}
