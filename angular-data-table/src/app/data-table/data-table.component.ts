import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

interface Supplier {
  name:string,
  address:string,
  phone:string,
  email:string
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  suppliers:Array<Supplier> = [
    {name:'Supplier1',address:'Address1',phone:'0123456789',email:'supplier1@gmail.com'},
    {name:'Supplier2',address:'Address2',phone:'0123456789',email:'supplier2@gmail.com'},
    {name:'Supplier3',address:'Address3',phone:'0123456789',email:'supplier3@gmail.com'},
    {name:'Supplier4',address:'Address4',phone:'0123456789',email:'supplier4@gmail.com'},
    {name:'Supplier5',address:'Address5',phone:'0123456789',email:'supplier5@gmail.com'},
    {name:'Supplier6',address:'Address6',phone:'0123456789',email:'supplier6@gmail.com'},
    {name:'Supplier7',address:'Address7',phone:'0123456789',email:'supplier7@gmail.com'},
    {name:'Supplier8',address:'Address8',phone:'0123456789',email:'supplier8@gmail.com'},
    {name:'Supplier9',address:'Address9',phone:'0123456789',email:'supplier9@gmail.com'},
    {name:'Supplier10',address:'Address10',phone:'0123456789',email:'supplier10@gmail.com'},
    {name:'Supplier11',address:'Address11',phone:'0123456789',email:'supplier11@gmail.com'},
    {name:'Supplier12',address:'Address12',phone:'0123456789',email:'supplier12@gmail.com'},
    {name:'Supplier13',address:'Address13',phone:'0123456789',email:'supplier13@gmail.com'},
    {name:'Supplier14',address:'Address14',phone:'0123456789',email:'supplier14@gmail.com'},
    {name:'Supplier15',address:'Address15',phone:'0123456789',email:'supplier15@gmail.com'},
    {name:'Supplier16',address:'Address16',phone:'0123456789',email:'supplier16@gmail.com'},
    {name:'Supplier17',address:'Address17',phone:'0123456789',email:'supplier17@gmail.com'},
    {name:'Supplier18',address:'Address18',phone:'0123456789',email:'supplier18@gmail.com'},
    {name:'Supplier19',address:'Address19',phone:'0123456789',email:'supplier19@gmail.com'},
    {name:'Supplier20',address:'Address20',phone:'0123456789',email:'supplier20@gmail.com'},
    {name:'Supplier21',address:'Address21',phone:'0123456789',email:'supplier21@gmail.com'},
  ]

  currentPgae: number = 1;
  pageSize:number = 5;
  filteredSupplier: Array<Supplier> = this.suppliers;
  pageSizes:Array<number> = [5,10,15];
  ngOnInit(){
    this.visibleData();
  }

  visibleData(){
    let startIndex = (this.currentPgae - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;

    return this.filteredSupplier.slice(startIndex,endIndex);
  }
   
  nextPage(){
    this.currentPgae++;
  }

  previousPage(){
    this.currentPgae--;
  }

  pageNumbers(){
    let totalPages = Math.ceil(this.filteredSupplier.length / this.pageSize) 
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }
  changePage(pageNumber:number){
    this.currentPgae = pageNumber;
  }
  filterData(searchTerm:string){
    this.filteredSupplier = this.suppliers.filter((item)=>{
      return Object.values(item).some((val)=>{
        return val.toLowerCase().includes(searchTerm.toLowerCase());
      })
    });
    this.visibleData();
  }
  changePageSize(pageSize:any){
    console.log(pageSize);
    
    this.pageSize = pageSize;
    this.visibleData();
  }

}
