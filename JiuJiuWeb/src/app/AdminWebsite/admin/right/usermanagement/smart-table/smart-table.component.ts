import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {SmartTableService} from "../usermanagement.service";
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-view',
  template: `
    <button class="btn btn-info" [routerLink]="['./image']">{{ value }}</button>
  `,
})

export class ButtonViewComponent implements ViewCell, OnInit {
  // renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.value = '选择';
    // this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}


@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {
  public source: LocalDataSource = new LocalDataSource();

  settings = {
    mode:'inline',
    add: {
      addButtonContent: '添加',
      createButtonContent: '新建',
      cancelButtonContent: '取消',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '编辑',
      saveButtonContent: '保存',
      cancelButtonContent: '取消',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '删除',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      nickName: {
        title: '昵称',
        type: 'string',
      },
      gender: {
        title: '性别',
        type: 'string',
      },
      birthplace: {
        title: '出生地点',
        type: 'string',
      },
      birthday: {
        title: '出生日期',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'number',
      },
      image: {
        title: '',
        type: 'custom',
        editable: false,
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`);
          });
        }
      }
    },
  };


  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  // delete
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete it?')) {
      event.confirm.resolve();
      this.source = event.source;
      this.source.remove(event.data);
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

// create
  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create it?')) {
      event.confirm.resolve();
      this.source = event.source;
      this.source.add(event.newData);
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

  // edit
  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update it?')) {
      event.confirm.resolve();
      this.source = event.source;
      this.source.update(event.data, event.newData);
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }
}