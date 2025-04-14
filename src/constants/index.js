import UBLogo from "./../assets/ub_logo.png";
import JSSLogo from "./../assets/jssate_logo.jpg";
import CTSLogo from "./../assets/cts_logo.jpg";
import PythonLogo from "./../assets/python.jpg";
import JSLogo from "./../assets/javascript.jpg";
import SQLLogo from "./../assets/sql.png";
import ReactLogo from "./../assets/react.png";
import ReduxLogo from "./../assets/redux.png";
import NodeLogo from "./../assets/node.png";
import DJangoLogo from "./../assets/django.svg";
import NepAILogo from "./../assets/neptune_ai.png";
import KerasLogo from "./../assets/keras.png";
import PyTorchLogo from "./../assets/pytorch.png";
import TFLogo from "./../assets/tensorflow.png";
import MLFlowLogo from "./../assets/mlflow.png";
import PostGreSQLLogo from "./../assets/postsql.png";
import MySQLLogo from "./../assets/mysql.png";
import MongoLogo from "./../assets/mongodb.png";
import FirebaseLogo from "./../assets/firebase.jpg";
import SKLearnLogo from "./../assets/sklearn.png"
import PokereignsThumb from "./../assets/pokereigns.png"
import AirflowLogo from "./../assets/airflow.png"

export * from './projectDetails'

export const events = [
    {
        heading: "SUNY Buffalo, New York",
        year: "2024 - Present",
        course: "MS in Computer Science",
        description: "AI/ML Track",
        logo: UBLogo,
        direction: "left"
    },
    {
        heading: "Cognizant Technology Solutions",
        year: "2021 - 2024",
        course: "Business Analyst, React Developer",
        description: "Utilized React and Redux to build dynamic web applications. Implemented lazy loading to enhance performance and user experience",
        logo: CTSLogo,
        direction: "left"
    },
    {
        heading:    "JSS Academy of Technical Education",
        year: "2017 - 2021",
        course: "Bachelor of Engineering",
        description: "Information Science",
        logo: JSSLogo,
        direction: "left"
    },
]

export const skills = [
    {
        heading: "Programming Languages",
        tech: [
            {
                logo:PythonLogo,
                desc:"Python"
            },
            {
                logo: JSLogo,
                desc:"JavaScript"
            },
            {
                logo: SQLLogo,
                desc:"SQL"
            }
        ]
    },
    {
        heading: "Data Science & Analytics",
        tech: [
            {
                logo: null,
                desc: "Data Preprocessing"
            },
            {
                logo: null,
                desc:"Pandas"
            },
            {
                logo: null,
                desc:"Numpy"
            },
            {
                logo: null,
                desc:"Matplotlib"
            },
            {
                logo: null,
                desc:"Apache Spark"
            },
            {
                logo: null,
                desc:"Hadoop"
            }
        ]
    },
    {
        heading: "Machine Learning & AI",
        tech: [
            {
                logo: null,
                desc:"Supervised Learning"
            },
            {
                logo: null,
                desc:"Unsupervised Learning"
            },
            {
                logo: null,
                desc:"Deep Learning (CNNs, RNNs, LSTM)"
            },
            {
                logo: null,
                desc:"Model Validation"
            },
            {
                logo: null,
                desc:"Model Optimisation"
            },
            {
                logo: null,
                desc:"Feature Engineering"
            }
        ]
    },
    {
        heading: "Tools",
        tech: [
            {
                logo: SKLearnLogo,
                desc:"Scikit-learn"
            },
            {
                logo:PyTorchLogo,
                desc:"PyTorch"
            },
            {
                logo:TFLogo,
                desc:"Tensorflow"
            },
            {
                logo:KerasLogo,
                desc:"Keras"
            },
            {
                logo:NepAILogo,
                desc:"Neptune.ai"
            },
            {
                logo: MLFlowLogo,
                desc:"MLflow"
            },
            {
                logo: AirflowLogo,
                desc: "Airflow"
            }
        ]
    },
    {
        heading: "Web Technologies",
        tech: [
            {
                logo:ReactLogo,
                desc:"React"
            },
            {
                logo:ReduxLogo,
                desc:"Redux"
            },
            {
                logo:NodeLogo,
                desc:"Node.js"
            },
            {
                logo:DJangoLogo,
                desc:"DJango"
            }
        ]
    },
    {
        heading: "Database",
        tech: [
            {
                logo:PostGreSQLLogo,
                desc:"PostGreSQL"
            },
            {
                logo:MySQLLogo,
                desc:"MySQL"
            },
            {
                logo:MongoLogo,
                desc:"MongoDB"
            },
            {
                logo:FirebaseLogo,
                desc:"Firebase"
            }
        ]
    },
]

export const projects = [
    {
        title: "Kratos Digital Store",
        desc: ["Designed and developed an e-commerce website tailored for the sale of PC games.",
            "Developed an automated sales forecasting system using LSTM models, saved the model weights on AWS S3 buckets.",
            "Deployed the platform on AWS with the frontend hosted on Vercel for fast, scalable performance."],
        deployedLink: "https://kratos-digital-store.vercel.app/",
        githubLink: "https://github.com/kira2406/kratos-digital-store",
        tags: ["AIML", "FS", "ALL"],
        tech: [
            "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
            "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
            "https://img.shields.io/badge/etl_pipeline-20232A?style=for-the-badge",
            "https://img.shields.io/badge/Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white",
            "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
            "https://img.shields.io/badge/mlflow-FFFFFF?style=for-the-badge&logo=mlflow&logoColor=017CEE",
            "https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white",
            "https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white",
            "https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white",
            "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
            "https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white",
            "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
            "https://img.shields.io/badge/Redux%20saga-86D46B?style=for-the-badge&logo=redux%20saga&logoColor=999999",
            "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
            "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
            "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
            "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white",
            "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
            "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
        ],
        thumbnail: null
    },
    {
        title: "Autoencoders for Anomaly Detection in Amazon EC2 CPU latency",
        desc: [
          "Developed a deep autoencoder-based anomaly detection system for identifying CPU latency of an Amazon EC2 instance during system failure from the Numenta Anomaly Benchmark.",
          "Achieved 99% detection accuracy by leveraging reconstruction error to identify subtle deviations in input patterns.",
          "Conducted performance benchmarking across LSTM, BiLSTM and Stacked LSTM encoder variants, comparing precision, recall and inference latency to select the most effective model.",
          "Integrated Neptune.ai for real-time experiment tracking, hyperparameter logging and visualizing reconstruction loss."
        ],
        tags: ["AIML", "FS", "ALL"],
        tech: [
            "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
            "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
            "https://img.shields.io/badge/Deep_Learning-20232A?style=for-the-badge",
            "https://img.shields.io/badge/Neptune.ai-5B69C2?style=for-the-badge&logo=neptune&logoColor=white"]
        ,
        githubLink: "https://github.com/kira2406/anomaly_detection_autoencoders",
        deployedLink: "",
        thumbnail: null,
        viewDetails: "anomaly-detection-autoencoders"
        
      },
    {
        title: "Image Super Resolution",
        desc: ["Implemented CNN and GAN from scratch for improving the quality of pixelated, low quality images."],
        deployedLink: "https://kira2406-imagesuperres-esrgan-app-szstbp.streamlit.app/",
        githubLink: "https://github.com/kira2406/Image-Quality-Enhancement",
        tags: ["AIML", "ALL"],
        tech: ["https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
            "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white",
            "https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=Streamlit&logoColor=white"],
        thumbnail: null
    },
    {
        title: "Norway Fisheries Species and Tools Recommendation System",
        desc: ["Performed data cleaning and preprocessing on Norwegian fisheries dataset.", "Using the cleaned dataset, I trained machine learning models to predict the most possible species to be caught at a given region and the tools recommendation for it."],
        deployedLink: "",
        githubLink: "https://github.com/sridharahn/norway-fishing-MLModel",
        tags: ["AIML", "ALL"],
        tech: [
            "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
            "https://img.shields.io/badge/Data_Cleaning-black?style=for-the-badge",
            "https://img.shields.io/badge/Exploratory_Data_Analysis-193ca2?style=for-the-badge",
            "https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white",
            "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green",
            "https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white",
            "https://img.shields.io/badge/pandas-08085e?style=for-the-badge&logo=pandas&logoColor=FFFFFF"
        ],
        thumbnail: null
    },
    {
        title: "Automated Parking System using Convoluted Neural Networks",
        desc: ["Automated parking by storing registration plate data and timestamps using low-light enhancement algorithms for improved detection in low light.","Utilized the Faster R-CNN model for real-time detection from webcam input and integrated the model with a database system for collecting parking fees."],
        deployedLink: "",
        githubLink: null,
        tags: ["AIML", "ALL"],
        tech: [
            "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
            "https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white",
            "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white",
            "https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white",
            "https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white",
            "https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white",
            "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"],
        thumbnail: null
    },
    {
        title: "Formula-1 Database Management System",
        desc: ["Designed a detailed database system to manage data for Formula 1 events, ensuring BCNF normalization.",
            "Developed stored procedures to automatically refresh team standings and driver standings table whenever new race data was entered into the database."],
        deployedLink: "",
        githubLink: "https://github.com/kira2406/f1_dbms",
        tags: ["FS", "ALL"],
        tech: [
            "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
            "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
            "https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"
        ],
        thumbnail: null

    },
    {
        title: "An RPG Game: PokeReigns",
        desc: ["Developed an online role-playing game inspired by the popular anime Pokemon.", "Enables users to capture and train Pokemons through battles with wild Pokemons and/or other trainers", 
              "Leveraged Google’s Firebase for managing authentication and storing users' data as it provides an identity platform and in-built UI libraries to authenticate the user in the application securely"
        ],
        deployedLink: "https://pokereigns.web.app/",
        githubLink: "https://github.com/kira2406/PokeReigns",
        tags: ["FS", "ALL"],
        tech: [
            "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
            "https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"
        ],
        thumbnail: PokereignsThumb

    },
    {
        title: "Olympics Database Management System",
        desc: ["Successfully designed a comprehensive database system to store data related to Olympic events demonstrating the use of normalisation rules", 
              "Employed stored procedures to automatically update country wise medal tally and the main table when a new competition data was added to the database"
        ],
        deployedLink: "",
        githubLink: null,
        tags: ["FS", "ALL"],
        tech: [
            "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
            "https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white",
            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
            "https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"
        ],
        thumbnail: null

    }
]