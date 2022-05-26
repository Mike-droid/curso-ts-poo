export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;

  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
  constructor(public database: string, public password: string, public port: number) {}

  connect(): void {
    console.log('Postgres connected');
  }

  isConnected(name: string): boolean {
    return true;
  }
}

//! Obligatoriamente deben tener los atributos del driver

class OracleDriver implements Driver {
  constructor(public database: string, public password: string, public port: number) {}

  connect(): void {
    console.log('Oracle connected');
  }

  isConnected(name: string): boolean {
    return true;
  }
}
