Website link: https://hurricanetracker.onrender.com
# This project includes two sub-parts

1. A machine learning model trained on Infrared images of tropical cyclones to predict their maximum wind intensities and
2. A website portal to represent all the information about these tropical cyclones.

The model is trained using Tensorflow and Keras and the website is made with Django and reactjs.

### Folder structure:

1. All the machine learning code resides in CNN model folder. The machine learning model is contained inside the Model.py file. download.py and assemble.py files downloads and assembles the data(cyclone image vectors) for model training.

2. Frontend of the website is made using reactjs and it resides inside the Frontend folder of the project.

3. intensity_app is the django app that handles all the backend of the website.

### Use case:

Data predictions from the CNN model are feeded into the Postgres Database which is then accesssed by the backend of our website. These data is what is presented to the user on the portal.

![1](https://user-images.githubusercontent.com/65943606/177590658-766f4de6-a1e2-4776-8afc-b9202032e0d5.JPG)
![Capture](https://user-images.githubusercontent.com/65943606/177590673-e352dbcb-628e-4aa2-b19a-e2efabbef807.JPG)

[Writeup.pdf](https://github.com/yashd26/cyclone-intensity-using-CNN/files/10404152/IISFdoc_removed.pdf)
