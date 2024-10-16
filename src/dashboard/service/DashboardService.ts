import { DashboardRepository } from '../repository/DashboardRepository';

export class DashboardService {
  private dashboardRepository: DashboardRepository;

  // Hardcoded Health Reminders and Tips
  private healthReminders: string[] = [
    'Take medication A at 9:00 AM daily.',
    'Schedule your annual check-up.',
    'Remember to exercise for at least 30 minutes today.',
    'Maintain a balanced diet rich in fruits and vegetables.'
  ];

  private healthTips: string[] = [
    'Stay hydrated! Aim to drink at least 8 glasses of water per day.',
    'Incorporate stretching into your daily routine to improve flexibility.',
    'Ensure you get 7-8 hours of quality sleep each night.',
    'Practice mindfulness or meditation to reduce stress.'
  ];

  constructor() {
    this.dashboardRepository = new DashboardRepository();
  }

  /**
   * Get dashboard data for the authenticated user.
   * @param userId - The ID of the authenticated user.
   * @returns An object containing upcoming appointments, health reminders, and health tips.
   */
  async getDashboardData(userId: string): Promise<{
    upcomingAppointments: any[];
    healthReminders: string[];
    healthTips: string[];
  }> {
    // Fetch upcoming appointments
    const upcomingAppointments = await this.dashboardRepository.getUpcomingAppointments(userId);

    // Select 2 random health reminders
    const selectedReminders = this.getRandomItems(this.healthReminders, 2);

    // Select 2 random health tips
    const selectedTips = this.getRandomItems(this.healthTips, 2);

    return {
      upcomingAppointments,
      healthReminders: selectedReminders,
      healthTips: selectedTips
    };
  }

  /**
   * Utility method to select random items from an array.
   * @param items - The array of items.
   * @param count - Number of items to select.
   * @returns An array of randomly selected items.
   */
  private getRandomItems(items: string[], count: number): string[] {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
