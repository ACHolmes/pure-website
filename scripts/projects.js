let modellingText = `
<p> this is a paragraph </p>`

let runningText = `
<p> This is a running paragraph</p>`

function updateCenter(project)
{
    let mutable = document.getElementById('mutable');
    if (project == 'modelling')
    {
        mutable.innerHTML = modellingText;
        return;
    }
    if (project == 'running')
    {
        mutable.innerHTML = runningText;
        return;
    }
    
}