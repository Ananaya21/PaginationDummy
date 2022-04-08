import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() from!:number;
  @Input() to!:number;
  @Input() total!:number;
  showPageDetails= true;
  @Input() enteredPage!:any;
  @Input() currentPage=1;
  @Input() pageCount!:number;

  @Input() currentIndex !: number;
  // rightIndex = currentIndex +1;
  // leftIndex = currentIndex -1;


  // getArraysLength(){
  //   return
  // }
  constructor() { }
  pageList: Array<number> = [1,2,4,5,6];
  pageData = {
    start :1,
    end:100,
    totalRecords:400,
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.pageList=[];
    if(this.pageCount>0 && this.pageCount<6){
      for(let i = 0;i<=this.pageCount;i++){
        this.pageList.push(i);
      }
    }
    this.pageTraversal(this.currentPage,true);
  }

  pageTraversal(page:any,showPageDetails:boolean){
    this.pageList =[];
    this.currentPage = page;
    if(page>0 && this.currentPage < this.pageCount && this.pageList[this.pageList.length -1]+1 < this.pageCount){
      for(let i=0;i<this.pageCount;i++){
        this.pageList.push(i);
      }
    }
  }

  nextClick(page:any,showPageDetails:boolean){
    this.pageList= [];
    console.log(this.currentPage)
    this.currentPage += page
    console.log(this.currentPage)
    showPageDetails=true
    console.log(this.pageCount)
    if(page>0 && this.currentPage < this.pageCount && this.pageList[this.pageList.length -1]+1 < this.pageCount){
      console.log(this.pageCount)

      alert('increment function is called')
      this.pageList.shift();
      this.pageList.push(this.pageList[this.pageList.length -1]+1)
      console.log(this.pageList.push(this.currentPage));
    }else{
      this.pageList.unshift();
      this.pageList.pop();
    }
  }

}
