import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ReportItemService } from './services/reportItem.service';
import { ReportItem, ReportItemType } from './types';

@Component({
    selector: 'ps-create-report-item',
    templateUrl: './create-report-item.component.html',
    styleUrls: ['./create-report-item.component.css']
})
export class CreateReportItemDialogComponent {

    item: ReportItem = {
        description: '',
        amount: 0,
        hasReceipt: false,
        type: ReportItemType.unselected,
        date: new Date()
    };

    itemTypeOptions: ReportItemType[] = [
        ReportItemType.unselected,
        ReportItemType.food,
        ReportItemType.officeSupplies,
        ReportItemType.training,
        ReportItemType.transport,
        ReportItemType.travel
    ];

    errorMessage = '';

    constructor(private dialogRef: MatDialogRef<CreateReportItemDialogComponent>,
        private reportItemService: ReportItemService) { }

        addItem(item: ReportItem) {
            this.errorMessage = this.reportItemService.isValid(item);
            if (!this.errorMessage) {
                this.dialogRef.close(item);
            }
        }
}
