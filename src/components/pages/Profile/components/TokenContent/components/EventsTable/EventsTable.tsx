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
import { useToken, TokenEvent } from "@/context/token";
import { formatAddress } from "@/helpers/formatAddress";

const EventsTable = () => {
  const { events, isLoadingEvents, eventsError, refetchEvents } = useToken();

  const getExplorerUrl = (transactionHash: string): string => {
    return `https://etherscan.io/tx/${transactionHash}`;
  };

  const renderEventRow = (event: TokenEvent) => {
    const isTransfer = event.type === "Transfer";

    return (
      <TableRow key={`${event.transactionHash}-${event.blockNumber}`} hover>
        <TableCell sx={{ minWidth: { xs: 80, md: 100 } }}>
          <Chip
            label={event.type}
            color={isTransfer ? "primary" : "secondary"}
            size="small"
            variant="outlined"
          />
        </TableCell>
        <TableCell sx={{ minWidth: { xs: 100, md: 120 } }}>
          <Typography
            variant="body2"
            fontFamily="monospace"
            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
          >
            {event.formattedValue}
          </Typography>
        </TableCell>
        <TableCell sx={{ minWidth: { xs: 100, md: 120 } }}>
          <Typography
            variant="body2"
            fontFamily="monospace"
            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
          >
            {isTransfer
              ? formatAddress(event.from)
              : formatAddress(event.owner)}
          </Typography>
        </TableCell>
        <TableCell sx={{ minWidth: { xs: 100, md: 120 } }}>
          <Typography
            variant="body2"
            fontFamily="monospace"
            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
          >
            {isTransfer
              ? formatAddress(event.to)
              : formatAddress(event.spender)}
          </Typography>
        </TableCell>
        <TableCell sx={{ minWidth: { xs: 120, md: 140 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body2"
              fontFamily="monospace"
              sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
            >
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
        <TableCell sx={{ minWidth: { xs: 80, md: 100 } }}>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
          >
            {event.blockNumber.toString()}
          </Typography>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card
      sx={{ height: "100%", borderRadius: 8, overflow: "hidden", zIndex: 1 }}
    >
      <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
          >
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
          <Box sx={{ overflow: "auto", maxWidth: "100%" }}>
            <TableContainer sx={{ maxHeight: 400 }}>
              <Table
                stickyHeader
                size="small"
                sx={{ minWidth: { xs: 600, md: 800 } }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ minWidth: { xs: 80, md: 100 } }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                      >
                        Type
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ minWidth: { xs: 100, md: 120 } }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                      >
                        Amount
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ minWidth: { xs: 100, md: 120 } }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                      >
                        From/Owner
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ minWidth: { xs: 100, md: 120 } }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                      >
                        To/Spender
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ minWidth: { xs: 120, md: 140 } }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                      >
                        Transaction
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ minWidth: { xs: 80, md: 100 } }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                      >
                        Block
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((event: TokenEvent) => renderEventRow(event))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {events.length > 0 && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mt: 2,
              display: "block",
              fontSize: { xs: "0.7rem", md: "0.75rem" },
            }}
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
