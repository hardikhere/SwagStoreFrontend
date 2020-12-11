import React, { useEffect, useState } from 'react'
import "./style.scss";

export const Carousel = () => {
    const [Items, setItems] = useState([]);
    const [CurrentSlide, setCurrentSlide] = useState(0);
    const [PrevSlide, setPrevSlide] = useState(0);
    const [NextSlide, setNextSlide] = useState(0);

    const Main = () => {
        const d = document;
        let items = d.getElementsByClassName("carousel__photo");
        setItems(items);
        items[0].classList.add("active");
        items[items.length - 1].classList.add("prev");
        items[1].classList.add("next");
        setPrevSlide(items.length - 1);
        setNextSlide(1);
        let numberOfSlides = items.length;
    }
    useEffect(() => {
        Main();
    }, []);
    const moveTo = (slide) => {

        Items[CurrentSlide].classList.remove("active");
        Items[PrevSlide].classList.remove("prev");
        Items[NextSlide].classList.remove("next");

        setCurrentSlide(slide);
        if (slide === Items.length - 1) {
            setNextSlide(0);
            setPrevSlide(slide - 1);
            Items[slide - 1].classList.add("prev");
            Items[0].classList.add("next");
        }
        else if (slide === 0) {
            setPrevSlide(Items.length - 1);
            setNextSlide(slide + 1)
            Items[Items.length - 1].classList.add("prev");
            Items[slide + 1].classList.add("next");
        }
        else {
            setPrevSlide(slide - 1);
            setNextSlide(slide + 1);
            Items[slide - 1].classList.add("prev");
            Items[slide + 1].classList.add("next");
        };
        Items[slide].classList.add("active");
    };

    const performNext = () => {
        if (CurrentSlide + 1 < Items.length) {
            moveTo(CurrentSlide + 1);
            setCurrentSlide(CurrentSlide + 1);
        }
        else if (CurrentSlide === Items.length - 1) {
            moveTo(0);
            setCurrentSlide(0);
        }
    }
    const performPrev = () => {
        if (CurrentSlide === 0) {
            moveTo(Items.length - 1);
            setCurrentSlide(Items.length - 1);
        }
        else {
            moveTo(CurrentSlide - 1);
            setCurrentSlide(CurrentSlide - 1)
        }
    }
    return (
        <div className="carousel-wrapper">
            <div className="carousel">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLRVsxe5OJVY%2Fmaxresdefault.jpg&f=1&nofb=1"
                    alt="" className="carousel__photo" srcset="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLRVsxe5OJVY%2Fmaxresdefault.jpg&f=1&nofb=1"
                    alt="" className="carousel__photo" srcset="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLRVsxe5OJVY%2Fmaxresdefault.jpg&f=1&nofb=1"
                    alt="" className="carousel__photo" srcset="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FLRVsxe5OJVY%2Fmaxresdefault.jpg&f=1&nofb=1"
                    alt="" className="carousel__photo" srcset="" />
                <div className="carousel__button--next" onClick={performNext}></div>
                <div className="carousel__button--prev" onClick={performPrev}></div>
            </div>
        </div>
    )
}
