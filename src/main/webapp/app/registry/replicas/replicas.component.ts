import { Component, OnInit } from '@angular/core';
import { JhiReplicasService } from './replicas.service';

@Component({
    selector: 'jhi-replicas',
    templateUrl: './replicas.component.html',
    styleUrls: [
        'replicas.component.scss'
    ]
})
export class JhiReplicasComponent implements OnInit {
    showMore: boolean;
    replicas: any;

    constructor(private replicasService: JhiReplicasService) {
        this.showMore = true;
    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.replicasService.findAll().subscribe((replicas) => {
            this.replicas = replicas;
        });
    }
}
