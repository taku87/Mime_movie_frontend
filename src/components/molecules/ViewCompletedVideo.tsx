import React, { useRef, useEffect } from 'react'
import video_mp4 from "videos/title-animation.mp4"

export function ViewCompletedVideo() {

const completed_video_url = "https://completed-videos-s3-01.s3.amazonaws.com/200_content.MOV?AWSAccessKeyId=ASIA6OMB56ZCRVF7LDHE&Signature=bDuXcAwGdmO3yJKJxn0c9DJksws%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEEwaDmFwLW5vcnRoZWFzdC0xIkcwRQIhAMg9Fj8ZlILRVN1GfBejfHPJuAR7FDSFL8RBaThhgiwVAiBc8Fp9ptRJBJpCPHzOce%2BxnFzcnMUc9jhOtiuWt9F23iqKAwgVEAAaDDk5Mjk0NjgxMjQ4NSIMLbHgxfop8m2x9uxGKucC3eQ5g6IpUMf8MO0yDkx78pQGSEndDRwoubr2GhL3LI3aEM6ZObrkcl47uo9f5wznsjMeEl9dJURa6YVNjy9bHQWb9NuJGIk%2FuQLu3ynWCA5sVUJHRAMv9NMkotOW%2FGbyAoBfAc5YRDDKBssvtUo3yo%2BNJB%2BLfoh4ABLT9O5kuViITdYutNfoEjjok5bbpWuMnT%2ByKZgMRObWyHZ0UbbvpYwe2ZI4xFNeSUs%2Fw4rNheqTbLAfVYBQJCNyIdP%2BnzfGreEHc5lXpISciskLRYcUEG8g6sSMpm9HTLDwAhIp1v%2F34ZtRUbpMvN7CowiL9R68UXI53uepgsQGU9Ck0Gd7PRaZkrYbxSAZpTqILppZkhHMU99n9Wvt%2Bk41FAbAoIlCHB1LIqPdpZD%2Fr1uyTruq5MZSeHRVjcQITvLU2q%2BkD0ZRNTLPh13iLcRM7Vr6Aq9eP8hzMUBVATjvNqgLLfjRL3qDNCyytq8wgqmAmgY6nQFeOi4R2Dx4Xv5B9musELMZwlzIcN7KLrK4hu%2FtgB6rKXe7k%2BGtCLdtv7xONWeRw7noNu%2BGAyQHcCqppfJsRXIp1br7mvpEtrlyuB76oBpinWoSrkWWhp7ooRO9cEhhxWnTZs8m89wis5VSpzU9GEcHML0QkYxJ8CRT4i617bp7P%2BuG635YkXo%2FT9NfCLf%2B6HjGnrr4jQmQkR4UtmY9&Expires=1665147539"
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
            <video className="movie"  muted ref={videoRef} width="800" height="450" >
                <source src={completed_video_url} type="video/mp4" />
            </video>
    );
}

export default ViewCompletedVideo;