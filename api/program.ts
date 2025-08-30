import API from "./client";

export const getPrograms = async () => {
 try {
     const response = await API.get('/programs');
     return response.data;
 } catch (error) {
     console.error('Error fetching programs:', error);
     throw error;
 }
};

export const getProgram = async (id: string) => {
 try {
     const response = await API.get(`/programs/${id}`);
     return response.data;
 } catch (error) {
     console.error('Error fetching program:', error);
     throw error;
 }
};
