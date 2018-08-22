//container
    //form
        //basic info
           //website url (optional)
            //phone # (optional)
            //artist statement
            //gallery address/name?
            //style choice: light or dark checkboxes
        <form class="is-8">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="Name"/>
                    </div>
                    </div>
                </div>
            </div>
         
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Website</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="url"/>
                    </div>
                    </div>
                </div>
            </div>
           
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Phone #</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="666-666-6666"/>
                    </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Artist Statement</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea" placeholder="Artist Statement"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Portfolio Style</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <label class="radio">
                                <input type="radio" name="question"/>
                                Light
                            </label>
                            <label class="radio">
                                <input type="radio" name="question"/>
                                Dark
                            </label>
                        </div>
                        <p class="help">Preview</p>
                    </div>
                </div>
            </div>
        </form>
        //mediums
            //checkbox list
        <div class="tile is-parent is-4">
            <article class="tile is-child notification is-light">
              <p class="title">Mediums</p>
              <p class="subtitle">Check all that apply</p>
              <div class="content">
                <div class="field is-vertical">
                    {/* <div class="field-label is-normal">
                        <label class="label">Mediums</label>
                    </div> */}
                    <div class="field-body">
                        <div class="field">
                            <label class="checkbox">
                                <input type="checkbox"/>
                                Category
                            </label>
                            <label class="checkbox">
                                <input type="checkbox"/>
                                Category
                            </label>
                            <label class="checkbox">
                                <input type="checkbox"/>
                                Category
                            </label>
                        </div>
                    </div>
                </div>
              </div>
            </article>
        </div>
            
        //profile photo
            //preview of current
            //url 
        //submit a show
        //SAVE CHANGES button
            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <a class="button is-primary">
                    Submit
                    </a>
                </p>
                <p class="control">
                    <a class="button is-light">
                    Cancel
                    </a>
                </p>
            </div>

            

