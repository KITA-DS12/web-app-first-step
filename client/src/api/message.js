const API_BASE = '/api';

export const messageApi = {
  async getMessage() {
    const response = await fetch(`${API_BASE}/message`);

    if (!response.ok) {
      throw new Error('Failed to fetch message');
    }

    return response.json();
  },
};
