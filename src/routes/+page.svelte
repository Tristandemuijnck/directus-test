<form action="?/upload-file" method="post" enctype="multipart/form-data">
    <label>
        Title
        <input type="text" name="title" id="title">
    </label>
    <label>
        File upload
        <input type="file" name="file" id="file">
    </label>
    <button type="submit">Upload</button>
</form>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    label{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        width: 5rem;
    }

    #title {
        width: 10rem;
    }
</style>
