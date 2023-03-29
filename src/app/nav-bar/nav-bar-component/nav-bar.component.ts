import {  OnInit, Component } from '@angular/core';
import { YoutubeService } from './../../common-services/youtube-service.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //  @Output() searchSelectedData: EventEmitter<{searchData: string}>;
  showAllRecords: any[];
  public search:string;
  showResults: boolean;
  showAllChannels: any[];
  // 
  constructor(private youtubeService: YoutubeService) { 
     this.search = "";
     this.showResults = false;
     this.showAllRecords = []
     this.showAllChannels = [];
     // this.searchSelectedData = new EventEmitter<{searchData: string}>();
    //  this.searchData(this.search)
 
   }
  // 
  ngOnInit(): void {
  }


  searchData(searchValue: any) {
    debugger
    this.showAllRecords = [];
     this.showAllChannels = [];

    // this.searchSelectedData.emit({searchData: this.search});
    this.youtubeService.getChannels(searchValue).subscribe((data) => {
        this.showAllChannels = data.items
        console.log(data.items);
        
        this.showResults = true;
    })
    this.youtubeService.getVideos(searchValue).subscribe((data) => {
        this.showAllRecords = data.items
        console.log(data.items);
        
        this.showResults = true;
    })
   
    // if((searchValue.viewModel)==="Hello"){
    //   this.showResults = true

    // }
  }

}
