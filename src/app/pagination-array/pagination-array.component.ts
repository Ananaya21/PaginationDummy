import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-array',
  templateUrl: './pagination-array.component.html',
  styleUrls: ['./pagination-array.component.css']
})
export class PaginationArrayComponent implements OnInit {
  @Input() from: number = 1;
  @Input() to: number = 30;
  @Input() total: any = 100;
  @Input() showPageDetail: boolean = true
  @Input() totalPage: number = 16
  @Input() currentPage: number = 1
  @Input() pageInSingleView: number = 5
  public displayArray: Array<number> = []
  enterPageNo!: number;
  constructor() { }
  ngOnInit(): void {
    if(this.totalPage <= this.pageInSingleView){
      for(let i=1; i<=this.totalPage; ++i){
        this.displayArray.push(i);
      }
    }else if(this.pageInSingleView <= this.totalPage){
      for(let i=1; i<=this.pageInSingleView; ++i){
        this.displayArray.push(i);
      }
    }
    console.log("this.displayArray",this.displayArray);
  }
  currentIndexUpdate(value: number){
    this.currentPage+=value;
    console.log("this.currentPage",this.currentPage)
    this.displayArrayUpdate(this.currentPage)
  }
  currentIndexAssign(value: number){
    this.currentPage = value;
    console.log("this.currentPage in Assign",this.currentPage)
    this.displayArrayUpdate(this.currentPage)
  }
  onEnterPress(event: any){
    this.currentPage = this.enterPageNo;
    console.log("this.currentPage on enter",this.currentPage);
    if(this.currentPage <= this.totalPage){
    this.displayArrayUpdate(this.currentPage);
    }
  }
  displayArrayUpdate(index: any){
    let lastIndex=this.displayArray.length -1;
    if(this.currentPage > this.pageInSingleView){
      let appendElement = this.currentPage /2;
      if(this.currentPage%2 === 0){
        this.displayArray.push(this.currentPage+1);
        this.currentPage++;
        // this.displayArray.push(this.currentPage+appendElement,this.currentPage-appendElement);
        // console.log('odd',this.displayArray.push(this.currentPage+appendElement,this.currentPage-appendElement));
      }
      else{
        this.displayArray.push(this.currentPage-1);
        this.currentPage--;
       }
      }

    }

  }

