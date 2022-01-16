import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Calculator from "../components/calculator/questionnaire";
import ResultCard from "../components/calculator/result-card";

const Home: NextPage = () => {
    return (
        <div className="grid grid-cols-2 bg-parchment">
            <div className="p-2">
                <Calculator />
            </div>
            <div className="p-2">
                <ResultCard />
            </div>
        </div>
    );
};

export default Home;
