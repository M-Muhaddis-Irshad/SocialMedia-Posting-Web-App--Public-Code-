// Textarea Function Start's

let final_text_clr = "";
let Crnt_bgImage = "";
// const textarea_bg = document.getElementById("user_post");

function apply_bg_clr(color) {
    const textarea_bg = document.getElementById("user_post");

    const colorVal = getComputedStyle(color);
    const bg_color = colorVal.backgroundImage;

    Crnt_bgImage = bg_color;

    textarea_bg.style.backgroundImage = Crnt_bgImage;

    if (color.id === "white") {
        textarea_bg.style.color = `white`;
        final_text_clr = `white`;
    }
    else if (color.id === "black") {
        textarea_bg.style.color = `black`;
        final_text_clr = `black`;
    }
    else if (!color) {
        Crnt_bgImage.style.backgroundImage = 'black'
        final_text_clr = `white`;
        // return
    }

    // console.log(final_text_clr);
    // console.log(Crnt_bgImage);
}

// Textarea Function End's

// Posting Function Start's___________________________________________________________________

// Posting date & time
const d = new Date();
const full_date = `
                 ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} 
                 At: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}
`;

// console.log(full_date);

function post() {
    const userName = document.getElementById(`user_name`);

    if (userName.value === "" || userName.value.trim() === "") {
        userName.value = `Anonymous`;
    }

    // console.log(userName.value);

    const textarea_bg = document.getElementById("user_post");

    if (textarea_bg.value === "" || textarea_bg.value.trim() === " ") {
        textarea_bg.placeholder = `Plese create any post`;
        textarea_bg.classList.add('placeholder_clr');
        return
    }
    else {
        textarea_bg.placeholder = `Post anything you want`;
        textarea_bg.classList.remove('placeholder_clr');
    }

    // console.log(textarea_bg.value);

    // Clr bg of textarea & change the text color after posting 
    textarea_bg.style.backgroundImage = `none`;
    textarea_bg.style.color = `black`;

    let newPostDiv = document.getElementById("body_div");

    newPostDiv.innerHTML += `
    <div class="child_2" id="created_post">

        <div class="div_1st">

            <div class="div_1st_child_1">
                <img src="pfp/Profile_pic2.png" alt="Blank Profile Picture">

                <div>
                    <span>
                        ${userName.value}
                    </span>
                    <span>
                            ${full_date}
                    </span>
                </div>    

            </div>

            <div class="div_1st_child_2">

                <abbr onclick="this.parentElement.parentElement.parentElement.remove()" title="Delete Post">
                    <div class="del_post">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </abbr>

            </div>


        </div>

        <!-- Created Post -->


        <div class="div_2nd after_post mt-3 mb-3" style="background-image: ${Crnt_bgImage}; color: ${final_text_clr};">
            ${textarea_bg.value}
        </div>


        <!-- Created Post -->

        <!-- Icons -->

        <div class="icons_Container">

            <i onclick="showCommentBox(this)" class="material-symbols-outlined cmnt">
                chat
            </i>

            <i onclick="this.classList.add('likeFill')" class="material-symbols-outlined like">
                thumb_up
            </i>

            <i onclick="this.classList.add('heartFill')" class="material-icons heart">
                favorite
            </i>

        </div>

    </div>
`

    textarea_bg.value = ""
    final_text_clr = "black";
    userName.value = "";

    // console.log(final_text_clr);

}

// Posting Function End's

function clrAll() {
    const userName = document.getElementById(`user_name`);
    userName.value = "";

    const textarea_bg = document.getElementById("user_post");
    textarea_bg.style.backgroundImage = `none`;
    textarea_bg.style.color = `black`;
    textarea_bg.value = ""
    textarea_bg.placeholder = `Post anything you want`;
    textarea_bg.classList.remove('placeholder_clr');
    final_text_clr = "black";

    // console.log(`${userName.value}/${textarea_bg.value}/${textarea_bg.style.backgroundImage}`);

}

// Both codes are doing same work just syntax is changed_________________________________

document.getElementById("user_name").addEventListener("keydown",
    function (event) {
        if (event.key === "Enter") {
            post();
        }
    }
);

// document.getElementById("user_name").addEventListener("keydown", (event) => {
//     if (event.key === "Enter") post();
// });

// Both codes are doing same work just syntax is changed_________________________________

// Comment Box Section start's

function showCommentBox(cmnt_icon_clicked) {
    const post = cmnt_icon_clicked.closest(`#created_post`);

    if (post.querySelector(`#comment_box`)) {
        return;
    }

    post.innerHTML += `
    
            <div id="comment_box" class="comment_box mt-4">
            
                <div class="cmnt_user_container">

                    <div>
                        <img src="pfp/Profile_pic2.png" alt="Blank Profile Picture" class="cmnt_pfp">
                        <label for="cmnt_user_name">Your Name:</label>
                    </div>

                    <input type="text" name="" id="cmnt_user_name" placeholder="Enter your name...">
                </div>

                <textarea id="comment_textarea" placeholder="Add Comment..." rows="4"></textarea>

                <div class="cmnt_btns">

                    <div class="cmnt_styles">

                        <span onclick="comment_Style(this)" id="bold" class="material-symbols-outlined bold">
                            <abbr title="Bold">format_bold</abbr>
                        </span>
                        <span onclick="comment_Style(this)" id="italic" class="material-symbols-outlined italic">
                            <abbr title="Italic">format_italic</abbr>
                        </span>
                        <span onclick="comment_Style(this)" id="underline" class="material-symbols-outlined underline">
                            <abbr title="Underline">format_underlined</abbr>
                        </span>
                        <span onclick="comment_Style(this)" id="clrAll" class="material-symbols-outlined eraser">
                            <abbr title="Clear All Styles">ink_eraser</abbr>
                        </span>

                    </div>

                    <button onclick="post_comment(this)" class="cmnt_send_btn gap-2">
                        <span class="comment_send">
                            Send
                        </span>
                        <span class="material-symbols-outlined send_icon">
                            send
                        </span>
                    </button>

                </div>
            </div>   
`

    document.getElementById(`comment_textarea`).focus()
}

function comment_Style(styles) {
    const cmnt_txtarea = document.getElementById("comment_textarea");
    if (styles.id === "bold") {
        cmnt_txtarea.classList.add("textarea_bold");
    }
    else if (styles.id === "italic") {
        cmnt_txtarea.classList.add("textarea_italic");
    }
    else if (styles.id === "underline") {
        cmnt_txtarea.classList.add("textarea_underline");
    }
    else if (styles.id === "clrAll") {
        cmnt_txtarea.classList.remove(`textarea_bold`, `textarea_italic`, `textarea_underline`);
    }
}

// Comment Box Section end's



// Posted Comments start's______________________________________
const full_date_2 = `
                 ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} 
                 AT:
                 ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}
`;

function post_comment(cmnt_send_btn_click) {

    const cmnt_post = cmnt_send_btn_click.closest(`#created_post`);

    // Comment User Name start's

    const cmnt_user_name = document.getElementById("cmnt_user_name");

    if (cmnt_user_name.value === "" || cmnt_user_name.value.trim() === "") {
        cmnt_user_name.value = "Anonymous";
    }
    // Comment User Name end's

    // Textarea conditions start's________________________________________
    const cmnt_txtarea = document.getElementById("comment_textarea");

    const textStyles = getComputedStyle(cmnt_txtarea)
    const fontWeight = textStyles.fontWeight;
    const fontStyle = textStyles.fontStyle;
    const textDecoration = textStyles.textDecoration;

    if (cmnt_txtarea.value === "" || cmnt_txtarea.value.trim() === "") {
        cmnt_txtarea.classList.add("textareaError")
        cmnt_txtarea.placeholder = "Please enter this field"
        return
    }
    else {
        cmnt_txtarea.classList.remove("textareaError")
        cmnt_txtarea.placeholder = "Add Comment..."
    }
    // Textarea conditions end's________________________________________

    // Remove Styles from textarea after posting comment________________________________________
    cmnt_txtarea.classList.remove("textarea_bold", "textarea_italic", "textarea_underline");

    cmnt_post.innerHTML += `
    <div class="posted_comment my-3 p-3">

                <div class="posted_cmnt_name_container">

                    <div class="div_1">

                        <img src="pfp/Profile_pic2.png" alt="Blank Profile Picture" class="posted_cmnt_pfp">

                        <div>
                            <span>
                                ${cmnt_user_name.value}
                            </span>
                            <br>
                            <span class="date">
                                ${full_date_2}
                            </span>
                        </div>

                    </div>

                    <div class="posted_cmnt_del_btn">

                        <abbr onclick="this.parentElement.parentElement.parentElement.remove()" title="Delete Comment">
                            <div class="del_cmnt">
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </abbr>

                    </div>

                </div>

                <div class="posted_coment_content" style="font-weight: ${fontWeight}; font-style: ${fontStyle}; text-decoration: ${textDecoration};">
                    ${cmnt_txtarea.value}
                </div>

                <div class="post_icons_Container mx-1">

                    <i title="Like" onclick="this.classList.add('likeFill')" class="material-symbols-outlined post_like">
                        thumb_up
                    </i>

                    <i title="Love" onclick="this.classList.add('heartFill')" class="material-icons post_heart">
                        favorite
                    </i>

                </div>

            </div>
    `

    document.getElementById(`comment_box`).remove();
}

// Posted Comments end's