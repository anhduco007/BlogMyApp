import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages: any[];


  constructor() { }

  ngOnInit() {
    this.getPages(1);
    this.getTotalPage();
    this.currentPage = 1
  }

  fakePost = [
    { id: 1, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 2, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 3, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 4, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 5, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 6, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 7, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 8, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 9, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 10, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 11, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 12, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 13, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 14, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 15, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 16, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 17, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 18, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 19, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 20, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },
    { id: 21, title: 'Lorem', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium at cum odio null' },

  ]

  totalItem: number = this.fakePost.length;
  pageSize: number = 9
  totalPage: any[] = []
  currentPage: number;
  getTotalPage() {
    for (let i = 1; i <= Math.ceil(this.totalItem / this.pageSize); i++) {
      this.totalPage.push({ index: i })
    }
  }
  getPages(page: number) {
    if (page < 1) {
      this.pages = this.fakePost.slice(0, this.pageSize)
    } else if (page > Math.ceil(this.totalItem / this.pageSize)) {
      this.pages = this.fakePost.slice(this.fakePost.length - this.pageSize, this.fakePost.length - 1)
    } else {
      let startIndex: number, endIndex: number;
      startIndex = this.pageSize * (page - 1) + 1;
      endIndex = startIndex + this.pageSize;
      this.pages = this.fakePost.slice(startIndex - 1, endIndex - 1);
    }
  }
}
