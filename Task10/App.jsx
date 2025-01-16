import React from "react";


export default function () {


    let url = "https://api.github.com/users/sudeepnpatil"

    fetch(url)
        .then(Response => Response.json())
        .then(function (Response) {

            let { avatar_url, name, bio, following, followers, public_repos } = Response;

            /*  console.log(name);
             console.log(followers);
             console.log(bio);
  */
            console.log(Response);


            let myfolr = document.getElementById("myfollowers")
            let myfog = document.getElementById("myfolloweings")
            let mybio = document.getElementById("my_bio")
            let myrepository = document.getElementById("myrepo")
            let myname = document.getElementById("myname")
            let image = document.getElementById("myimage");
            image.src = Response.avatar_url;

            myfolr.innerHTML = `${followers}`
            myfog.innerHTML = `${following}`
            mybio.innerHTML = `${bio}`
            myrepository.innerHTML = `${public_repos}`
            myname.innerHTML = `${name}`
            //image.innerHTML = `${avatar_url}`

        }
        )

    return (
        <div className="flex justify-center items-center border h-screen w-screen">

            <div className="w-96 h-96 bg-gray-50 border rounded-3xl shadow-2xl">
                <div className="relative">
                    <div className="w-96 h-40 rounded-t-3xl bg-blue-600"></div>
                    <img id="myimage" alt="image" className="shadow-xl border-blue-600 border-4 w-40 h-40 rounded-full bg-gray-300 absolute left-28 top-12" />
                </div>

                <h1 className="text-2xl font-bold text-center mt-14" id="myname"></h1>
                <p className="text-center mt-3 opacity-60" id="my_bio"></p>

                <hr className="w-96 text-center mt-5 border-dashed border bg-gray-500" />
                <div className="flex mt-3 justify-around">

                    <div className="font-semibold">
                        followers
                        <p className="text-center mt-1 font-normal" id="myfollowers"></p>
                    </div>

                    <div className="font-semibold">

                        No of Repository
                        <p className="text-center mt-1 font-normal" id="myrepo"></p>

                    </div>

                    <div className="font-semibold">

                        following
                        <p className="text-center mt-1 font-normal" id="myfolloweings"></p>

                    </div>

                </div>
            </div>

        </div>
    )
}