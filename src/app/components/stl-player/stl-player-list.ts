import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService, PubSubService } from '../../_services/index';

// import fade in animation
import { fadeInAnimation } from '../../_animations/index';

@Component({
    selector: "stl-player-list",
    // moduleId: module.id.toString(),
    templateUrl: 'stl-player-list.html',
    // make fade in animation available to this component
    animations: [fadeInAnimation],
    styleUrls:  ['./../../scss/_forms.scss'],
    // attach the fade in animation to the host (root) element of this component
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@fadeInAnimation]': '' }
})

export class StlPlayerListComponent implements OnInit, OnDestroy {
    Players: any[];
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private playerService: PlayerService,
        private pubSubService: PubSubService) { }
    deletePlayer(id: number) {
        this.playerService.delete(id);
        this.loadPlayers();
    }

    ngOnInit() {
        this.loadPlayers();

        // reload Players when updated
        this.subscription = this.pubSubService.on('players-updated').subscribe(
            () => {
                this.loadPlayers();
        });
        console.log(this.Players);
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    openEditor(player: any) {
        this.router.navigate(['edit'], { queryParams: { player:  player} });
    }
    addPlayer() {
        this.router.navigate(['add'], { queryParams: {  } });
    }
    private loadPlayers() {
        this.Players = this.playerService.getAll();
    }
}
