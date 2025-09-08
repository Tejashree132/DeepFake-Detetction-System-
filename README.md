# Deepfake Detection System

An AI-powered **Deepfake Detection System** built using **Next.js**, **FastAPI**, and **TensorFlow**.

## 📑 Table of Contents
- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [How It Works](#how-it-works)
- [Results](#results)
- [Contributors](#contributors)
- [License](#license)

---

## 📖 About

Deepfake Detection system is a project developed as part of an **AI & ML Project**.  
It uses a **Convolutional Neural Network (CNN)** trained on the **OpenForensics dataset** to classify images as **real** or **fake**.  

The dataset contains ~191,000 images divided into:  
- **Training**: 140,000  
- **Validation**: 40,000  
- **Testing**: 11,000  
The model is trained with a Convolutional Neural Network (CNN) using TensorFlow and keras. This model was trained on Jupyter Notebbok 
but You can use Google colab for this ,and downloaded to the FastAPI server, and then used to make predictions. 
The trained TensorFlow model is served through a **FastAPI backend**, and a **Next.js frontend** provides the web interface for image upload and detection.  

---

## ⚙️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)  
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/)  
- **Model**: [TensorFlow](https://www.tensorflow.org/)  

---

## 🚀 Getting Started

### 🔹 Clone the repository
```bash
git clone https://github.com/Tejashree132/DeepFake-Detetction-System-.git
```

### 💻 Frontend Setup (Client)
```bash
cd client
npm install
npm run dev
```
App runs at 👉 http://localhost:3000

### ⚡ Backend Setup (Server)
```bash
cd server
python -m venv venv

# Activate venv
venv\Scripts\activate   # Windows
source venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
uvicorn main:app --reload
```
Server runs at 👉 http://localhost:8000

### ▶️ How It Works
1. User uploads an image via the web interface
2. The backend processes the image with the CNN model
3. The result is returned: Real ✅ or Fake ❌

### 📊 Results
Accuracy: 87.2%

👩‍💻 Contributors
[Tejashree132](https://github.com/Tejashree132)

### 📜 License
Licensed under the Apache-2.0 License. See [LICENSE](https://github.com/Tejashree132/DeepFake-Detetction-System-/blob/main/LICENSE) for details.
