Sign Language Recognition System
A real-time hand gesture recognition system utilizing computer vision and machine learning to identify and classify hand gestures, facilitating communication for individuals with speech impairments.​
Overview
This project encompasses the following components:​
Data Collection: Captures images of hand gestures via webcam.
Data Preprocessing: Processes collected images and extracts features using MediaPipe.
Model Training: Trains a machine learning model on the preprocessed data.
Real-time Recognition: Implements real-time hand gesture recognition using the trained model.​
Features
Real-time hand gesture recognition using webcam input.
Utilizes MediaPipe for efficient hand landmark detection.
Custom dataset creation for training purposes.
Modular code structure for ease of understanding and maintenance.​

Installation
Clone the repository:
git clone https://github.com/anshika01-20/Sign_language.git
cd Sign_language
Create a virtual environment (optional but recommended):
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install the required packages:
pip install -r requirements.txt
Usage
1. Data Collection
To collect images for different hand gestures:​
python collect_imgs.py
Follow the on-screen instructions to capture images for each gesture category.​

2. Dataset Creation
Process the collected images and extract features:​
python create_dataset.py
This will generate a data.pickle file containing the processed data.​

3. Model Training
Train the machine learning model using the processed dataset:​
python train_classifier.py
The trained model will be saved as model.p.​
4. Real-time Recognition
Run the application to start real-time hand gesture recognition:​
python final.py
Ensure your webcam is connected and functioning properly.​
Project Structure
plaintext

Sign_language/
├── data/                  # Collected images for each gesture
├── static/                # Static files for the web interface (if any)
├── templates/             # HTML templates for the web interface (if any)
├── app.py                 # Flask application (if applicable)
├── collect_imgs.py        # Script for collecting gesture images
├── create_dataset.py      # Script for creating the dataset
├── train_classifier.py    # Script for training the model
├── final.py               # Main script for real-time recognition
├── model.p                # Trained model file
├── data.pickle            # Processed dataset
├── requirements.txt       # Python dependencies
├── README.md              # Project documentation
└── .gitignore             # Files to ignore in version control

Dependencies
The project relies on the following Python packages:​
OpenCV
MediaPipe
NumPy
Flask (if using the web interface)
Pickle​
Ensure all dependencies are installed via pip install -r requirements.txt.​

