import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AjoutMembreComponent } from '../dialog/ajout-membre/ajout-membre.component';
import { MembreService } from 'src/app/service/membre.service';
import { Observable, catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-gestion-membre',
  templateUrl: './gestion-membre.component.html',
  styleUrls: ['./gestion-membre.component.sass']
})
export class GestionMembreComponent implements AfterViewInit {

  displayedColumns = ['nom', 'prenom'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  data: any = [];
  pageIndex = 0;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  constructor(public fb: FormBuilder, public dialog: MatDialog, public membreService: MembreService) {}

  ngAfterViewInit() {
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.membreService!.getMembres(this.pageIndex,10).pipe(catchError(() => of(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
         // this.resultsLength = data.total_count;
          return data;
        }),
      )
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.log(error),
      });
  }

  openDialog() {
     const dialogRef = this.dialog.open(AjoutMembreComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
