import { Component, OnInit } from '@angular/core';

// Import Eurojackpot Service.
import { EuroJackpotService } from '../services/eurojackpot.service';
// Import Common Models.
import { IResultTable, ResultTable } from '../models/models';

@Component({
  selector: 'euroJackpotContent',
  templateUrl: './eurojackpot.component.html',
  styleUrls: ['./eurojackpot.component.css']
})
export class EuroJackpotComponent implements OnInit {
  title = 'EuroJackpot';

  public result;
  public numbers = [];
  public euroNumbers = [];
  public resultsTable: IResultTable[];
  public errorMessage;
  public tiers = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII"
  ];

  public matches = [
    "5 Numbers + 2 Euronumbers",
    "5 Numbers + 1 Euronumber",
    "5 Numbers + 0 Euronumbers",
    "4 Numbers + 2 Euronumbers",
    "4 Numbers + 1 Euronumber",
    "4 Numbers + 0 Euronumbers",
    "3 Numbers + 2 Euronumbers",
    "2 Numbers + 2 Euronumbers",
    "3 Numbers + 1 Euronumber",
    "3 Numbers + 0 Euronumbers",
    "1 Number + 2 Euronumbers",
    "2 Numbers + 1 Euronumber"
  ];
  public ranks = [
    "rank1", 
    "rank2", 
    "rank3", 
    "rank4", 
    "rank5", 
    "rank6", 
    "rank7", 
    "rank8", 
    "rank9", 
    "rank10", 
    "rank11", 
    "rank12"
  ];

  // Constructor.
  constructor(private _eurojackpotService: EuroJackpotService) { };

  ngOnInit() {
    // Calling to service mehotd.
    this._eurojackpotService.getPosts()
      .subscribe(
          result => {
            this.result = result;
            this.getLotteryNumbers(result);
            this.getResultsTableContent(result);
            console.log(this.resultsTable);
          },
          error => {
              this.errorMessage = <any>error;
              if(this.errorMessage !== null){
                console.log(this.errorMessage);
              }
          }
      ); 
  };

  getResultsTableContent(result) : void {
    this.resultsTable = [];
    var odds = result.last.odds;
    for(var i = 0; i < this.tiers.length; i++) {
      var resultTable = new ResultTable();
      resultTable.tier = this.tiers[i];
      resultTable.match = this.matches[i];
      resultTable.winners = odds[this.ranks[i]].winners + "x";
      resultTable.amount = odds[this.ranks[i]].prize/100;
      this.resultsTable.push(resultTable);
    }
  }

  getLotteryNumbers(result) : void {
    this.numbers = result.last.numbers;
    this.euroNumbers = result.last.euroNumbers;
  }
}