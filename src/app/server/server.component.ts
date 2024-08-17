import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {

  serverId : number = 10 ;
  serverStatus : string = "Online";
  allowedaccessbtn : boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName : string = "TestServer"


  getServerStatus(){

    if(this.serverStatus == "Online"){

      return "this server is working"
    }

    else{
      return "this is not working"
    }


  }

  onCreatedServer(){

    this.serverCreationStatus = "server created successfully"
  }


}
