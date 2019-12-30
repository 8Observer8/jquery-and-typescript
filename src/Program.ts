import * as $ from "jquery";

// Playground: https://next.plnkr.co/edit/CoBEcB8vlZfQqAfz?preview
// GitHub: https://github.com/8Observer8/jquery-and-typescript

class Program
{
    public static Main(): void
    {
        console.log("Hello Main");
    }
}

Program.Main();

$(document).ready(() =>
{
    console.log("Hello jQuery");
});
