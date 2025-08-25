import React from "react";
import {
  Refresh as RefreshIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  CircularProgress,
  Alert,
  Link,
} from "@mui/material";
import useDAIToken, { TokenEvent } from "@/hooks/useDAIToken";

const EventsTable = () => {
  const { events, isLoadingEvents, eventsError, refetchEvents } = useDAIToken();

  const formatAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getExplorerUrl = (transactionHash: string): string => {
    // Using Etherscan for mainnet - adjust for your network
    return `https://etherscan.io/tx/${transactionHash}`;
  };

  const renderEventRow = (event: TokenEvent, index: number) => {
    const isTransfer = event.type === "Transfer";

    return (
      <TableRow key={`${event.transactionHash}-${index}`} hover>
        <TableCell>
          <Chip
            label={event.type}
            color={isTransfer ? "primary" : "secondary"}
            size="small"
            variant="outlined"
          />
        </TableCell>
        <TableCell>
          <Typography variant="body2" fontFamily="monospace">
            {event.formattedValue}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2" fontFamily="monospace">
            {isTransfer
              ? formatAddress(event.from)
              : formatAddress(event.owner)}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2" fontFamily="monospace">
            {isTransfer
              ? formatAddress(event.to)
              : formatAddress(event.spender)}
          </Typography>
        </TableCell>
        <TableCell>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" fontFamily="monospace">
              {formatAddress(event.transactionHash)}
            </Typography>
            <IconButton
              size="small"
              component={Link}
              href={getExplorerUrl(event.transactionHash)}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 0.5 }}
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Box>
        </TableCell>
        <TableCell>
          <Typography variant="body2">
            {event.blockNumber.toString()}
          </Typography>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card sx={{ height: "100%", borderRadius: 8 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Token Events
          </Typography>
          <IconButton
            onClick={refetchEvents}
            disabled={isLoadingEvents}
            size="small"
          >
            <RefreshIcon />
          </IconButton>
        </Box>

        {eventsError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {eventsError}
          </Alert>
        )}

        {isLoadingEvents ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : events.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="body2" color="text.secondary">
              No events found
            </Typography>
          </Box>
        ) : (
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Type
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Amount
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      From/Owner
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      To/Spender
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Transaction
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Block
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events.map((event, index) => renderEventRow(event, index))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {events.length > 0 && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 2, display: "block" }}
          >
            Showing last 1000 blocks • Click transaction hash to view on
            explorer
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default EventsTable;
