import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  first = 0;
  last = 0;
  ope = "+";
  result = 0;

  public check_first(event:any)
  {
    this.first = Number(event.target.value);
    if(isNaN(this.first) || this.first < 0)
    {
      alert("First parameter is not acceptable, insert only positive numbers");
    }
  }
  public check_last(event:any)
  {
    this.last = Number(event.target.value);
    if(isNaN(this.last) || this.last < 0)
    {
      alert("First parameter is not acceptable, isert only positive numbers");
    }
  }

  public op(event:any)
  {
    this.ope = event.target.value;
  }

  public calc()
  {
    if(this.ope == '+')
    {
      this.result = this.first + this.last;
      console.log(this.result);
    }
    if(this.ope == '-')
    {
      this.result = this.first - this.last;
      console.log(this.result);
    }
    if(this.ope == '*')
    {
      this.result = this.first * this.last;
      console.log(this.result);
    }
    if(this.ope == '/')
    {
      if (this.last == 0)
      {
        alert("Impossible division");
        return (0);
      }
      this.result = this.first / this.last;
      console.log(this.result);
    }
    return (this.result);
  }
}
setInterval(function(){
  alert("please use me !");
}, 30000);
