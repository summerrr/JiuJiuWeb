import {LocalDataSource} from 'ng2-smart-table';
import {Component} from '@angular/core';
import {AdminmanagementService} from "../adminmanagement.service";

@Component({
  selector: 'app-admin-table',
  templateUrl: './admintable.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdmintableComponent {

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
        type: 'string',
      },
        name: {
        title: '管理员名称',
        type: 'string',
      }
    },
  };


  constructor(private service: AdminmanagementService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  // delete
  onDeleteConfirm(event): void {
    if (window.confirm('您确定删除该管理员权限吗?')) {
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
    if (window.confirm('您确定创建该管理员用户吗？')) {
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
    if (window.confirm('您确定修改该管理员的信息吗？')) {
      event.confirm.resolve();
      this.source = event.source;
      this.source.update(event.data, event.newData);
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }
}