import databaseService from '@/app/utils/databaseService';
import { logger } from '@/app/winston';

class FitcheckService {
  constructor() {
    // Initialize any necessary dependencies
  }

  /**
   * Create a new fitcheck
   * @param {Object} fitcheckData - The fitcheck data to create
   * @returns {Promise<Object>} The created fitcheck
   */
  async create(fitcheckData) {
    logger.info('Creating fitcheck:', fitcheckData);
    return await databaseService.query(`
      INSERT INTO fitcheck (
        email, 
        name, 
        baby_age, 
        baby_weight, 
        carrier_type, 
        description, 
        photo_count, 
        fitcheck_id
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
      [
        fitcheckData.email, 
        fitcheckData.name, 
        fitcheckData.babyAge, 
        fitcheckData.babyWeight, 
        fitcheckData.carrierType, 
        fitcheckData.description, 
        fitcheckData.photoCount, 
        fitcheckData.fitcheckId
      ]
    );
  }

  /**
   * List all fitchecks
   * @param {Object} options - Query options (filters, pagination, etc.)
   * @returns {Promise<Array>} Array of fitchecks
   */
  async list() {
    return databaseService.query(`SELECT * FROM fitcheck`);
  }
}

export default FitcheckService; 