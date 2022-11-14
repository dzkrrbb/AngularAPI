import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datas : any;
  id : any;
  name : any;
  constructor(
    public api: ApiService,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.api.get('https://dzkrrbb.com/tutorial/php-restapi/get_city.php').then((data: any) => {
      if (data) {
        this.datas = data.city;
        console.log(data);
      } else {
        console.log('Not Found');
      }
    });
  }

  post() { 
    if (this.id === '' || this.name === '') {
      alert('All Fields are required');
    }

    const param = 'id='+this.id+'&name='+this.name;
    this.api.post('https://dzkrrbb.com/tutorial/php-restapi/post_city.php', param).then((data: any) => {
      if (data) {
        this.id ='';
        this.name = '';
        this.datas = data.city;
        console.log(data);
      } else {
        console.log('Not Found');

      }
    });
  }
}
