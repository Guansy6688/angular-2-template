import {Component, Input} from 'angular2/core';
import {Video} from "./video";

@Component({
    selector: "videoplayer",
    templateUrl: "app/ts/videoplayer.component.html"
})

export class VideoPlayerComponent {
    @Input() video: Video;
}