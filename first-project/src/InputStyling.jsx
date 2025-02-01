export default function ListStyling(){
    const disableInput = false;
    return(
        <>
            <input
                type="text"
                id="username"

                className="input-field" // class
                autoComplete="off"      // autocomplete

                maxLength={20}          // maxlength
                spellCheck={true}       // spellcheck
                readOnly="false"        // readonly
                tabIndex={0}            // tabindex

                disabled={disableInput}
                placeholder={
                    disableInput ? "{DISABLED}" : "Enter your name."
                }
            />
        </>
    )
}