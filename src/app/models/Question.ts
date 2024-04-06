export interface Question {
  question: string;
  descriptionQuestion: string;
  user: {
    fullName: string;
    profilePicture: string; // Assuming profile picture is a URL
  };
}
