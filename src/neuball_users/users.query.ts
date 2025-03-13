import { Injectable } from "@nestjs/common";

@Injectable()
export class QueryService {
  
  readonly getAllUsersQuery = "SELECT * FROM users";
}
