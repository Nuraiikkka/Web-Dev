import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  news = [
    'Что изменилось на hh.kz в 2024 году',
    'Авторазбор откликов в чат-боте',
    'Соискатели на HeadHunter смогут подтвердить свои данные'
  ];

  articles = [
    'Успешное собеседование: 15 лайфхаков',
    'Техническое задание: как помочь заказчику',
    'Как составить резюме: советы и примеры'
  ];

  categories = [
    { title: 'Вакансии дня', salary: '190000 - 800000 ₸', count: 14 },
    { title: 'Компании дня', salary: '', count: 413 },
    { title: 'Работа из дома', salary: '', count: 2142 },
    { title: 'Подработка', salary: 'до 863800 ₸', count: 1529 },
    { title: 'Курьер', salary: '100000 - 891600 ₸', count: 452 },
    { title: 'Водитель', salary: '11600 - 868500 ₸', count: 594 },
    { title: 'Продавец', salary: '79000 - 684900 ₸', count: 714 },
    { title: 'Кассир', salary: 'до 518300 ₸', count: 515 }
  ];

  cityJobs = [
    { title: 'Инженер техподдержки', company: 'TechnoPlus Ltd', salary: 'от 319000 ₸' },
    { title: 'Менеджер по продажам', company: 'HeadHunter: Казахстан', salary: 'от 400000 ₸' },
    { title: 'Курьер', company: 'inDrive', salary: 'от 500000 ₸' }
  ];
}


