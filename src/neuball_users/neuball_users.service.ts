import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNeuballUserDto } from './dto/create-neuball_user.dto';
import { UpdateNeuballUserDto } from './dto/update-neuball_user.dto';
import { DataSource, QueryRunner } from 'typeorm';
import { QueryService } from './users.query';

@Injectable()
export class NeuballUsersService {

  constructor(private readonly dataSource: DataSource,
    private readonly queryService: QueryService) {}

  async createUser(name: string, email: string): Promise<any> {
    const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await queryRunner.query(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email]
      );

      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException('Failed to create user');
    } finally {
      await queryRunner.release();
    }
  }

  async getAllUsers(): Promise<any> {
    const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      return await queryRunner.query(this.queryService.getAllUsersQuery);
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch users');
    } finally {
      await queryRunner.release();
    }
  }

  async getUserById(id: number): Promise<any> {
    const result = await this.dataSource.query(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );
    if(result.length == 0){
      console.log('ID Does not Exits!!!!')
      return 'Id Does not Exist'}
    else{
    return result[0];
    }
  }

  async updateUser(id: number, name: string, email: string): Promise<any> {
    return await this.dataSource.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, id]
    );
  }

  async deleteUser(id: number): Promise<any> {
    return await this.dataSource.query('DELETE FROM users WHERE id = ?', [id]);
  }
}
// }
