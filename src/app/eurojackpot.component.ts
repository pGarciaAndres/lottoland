import { Component, OnInit } from '@angular/core';

// Import Eurojackpot Service.
import { EuroJackpotService } from './services/eurojackpot.service';

@Component({
  selector: 'euroJackpotContent',
  templateUrl: './eurojackpot.component.html',
  styleUrls: ['./eurojackpot.component.css']
})
export class EuroJackpotComponent implements OnInit {
  title = 'EuroJackpot';

  public posts;
  public errorMessage;

  // Constructor.
  constructor(private _eurojackpotService: EuroJackpotService) { };

  ngOnInit() {
    // Calling to service mehotd.
    this._eurojackpotService.getPosts()
      .subscribe(
          result => {
            this.posts = result;
            console.log(this.posts);
          },
          error => {
              this.errorMessage = <any>error;

              if(this.errorMessage !== null){
                console.log(this.errorMessage);
              }
          }
      ); 
  };

}