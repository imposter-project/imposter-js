# Debugging mock failures

If you encounter issues with your mock not behaving as expected, here are some steps to help you debug the problem:

## Call `imposter doctor`

Run the following command to check the health of your Imposter setup:

```bash
imposter doctor
```

This command will provide you with information about the current state of your Imposter installation, including any potential issues that may be affecting your mocks.

## Check the logs

By default, mocks are logged to a file in your temporary directory. You can find the log path in the console output, such as:

```
Logging to /var/folders/hy/wn47zw352nxd7tr18_g44rcc0000gp/T/imposter2qpMiSxlNbhu/imposter.log
```

# Enable `.verbose()` logging

You can call `.verbose()` when constructing your mock to enable verbose logging. This will print the mock logs to stdout.

```js
mocks.verbose();
```

# Enable `.printLogOnCrash()`

You can call `.printLogOnCrash()` when constructing your mock to print the log to stdout if the mock crashes. This is useful for debugging issues that cause the mock to fail unexpectedly.

```js
mocks.printLogOnCrash();
```
