import { Component, signal } from '@angular/core';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';
import { Card } from '../../components/card/card';

const client1 = {
  name: 'Daniel',
  gender: 'male',
  age: 27,
  address: 'Jalisco, Mexico',
};

const client2 = {
  name: 'Isabel',
  gender: 'female',
  age: 24,
  address: 'Nayarit, Mexico',
};

@Component({
  selector: 'uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  // i18nSelect
  public client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeClient(): void {
    this.client.set(this.client() === client1 ? client2 : client1);
  }

  // i18nPlural
  clientsMap = signal({
    '=0': 'No hay ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    other: 'Tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Carlos',
    'Daniel',
    'Oliver',
    'Isabel',
    'Issac',
    'Diana',
    'Aurora',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Daniel',
    age: 36,
    address: 'Jalisco, México',
  };

  // Async Pipe
  promiseValue: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('Tenemos data en la promesa.');
      // rej('Tenemos un error en la data.');
      console.log('Promesa finalizada.');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );
}
