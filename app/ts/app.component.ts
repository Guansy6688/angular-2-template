import {Component} from 'angular2/core';
import {Config}  from './config.service';
import {Video} from './video';
import {VideoPlayerComponent} from './videoplayer.component';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent, VideoPlayerComponent]
})

export class AppComponent {
    mainHeadings = Config.MAIN_HEADING;
    videos:Array<Video>;
    video: Video;

    constructor(){
        this.videos = [
            new Video(1,"Tutorial 7", "f8qBeaGe2S4","Nested Components"),
            new Video(2,"Tutorial 8", "bKWDKmHvF78","Passing Data to Components"),

        ];
        this.video = this.videos[0];
    }
    onVideoSelected(video: Video) {
        this.video = video;
    }
}
